import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import forumData from '../../data/forum.json'; 
import Navbar from '../../components/Navbar/Navbar';
import './GestForum.css';
import Button from '../../components/Button/Button';

const GestForum = () => {
  const navigate = useNavigate();


  const [forum, setForum] = useState(forumData.forum);
  const [formData, setFormData] = useState({
    nome: '',
  });

  useEffect(() => {
    localStorage.setItem('forum', JSON.stringify(forum));
  }, [forum]);

  useEffect(() => {
    const savedForum = JSON.parse(localStorage.getItem('forum')) || forumData.forum;
    setForum(savedForum);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (formData.id) {
      // Atualizar 
      const updatedForum = forum.map(f =>
        f.id === formData.id ? { ...formData } : f
      );
      setForum(updatedForum);
    } else {
      // Adicionar novo forum
      const novoForum = {
        id: forum.length + 1,
        ...formData
      };
      setForum([...forum, novoForum]);
    }

    setFormData({
      nome: ''
    });
  };

  const excluir = (id) => {
    const updatedForum = forum.filter(f => f.id !== id);
    setForum(updatedForum);
  };

  const editar = (forum) => {
    setFormData({
      id: forum.id,
      nome: forum.nome
    });
  };

  return (
    <div className='gestao-forum'>
      <Navbar />

      {/* Formulário de Cadastro */}
      <div className='formulario'>
        <h2>Cadastro de Foruns</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-1'>
            <label>Nome do Forum:</label>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='buttonContainerForm'>
            <Button className="buttonGestaoForum" text="Cadastrar" color="#0367A5" size="medium" />
          </div>
        </form>
      </div>

      <div className='lista-forum'>
        <h2>Foruns Cadastrados</h2>
        <ul>
          {forum.map((f) => (
            <li key={f.id}>
              <h3>{f.nome}</h3>
              <div className='buttonEdicao'>
                <button className='buttonEditar' onClick={() => editar(f)}>Editar</button>
                <button className='buttonExcluir' onClick={() => excluir(f.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GestForum;