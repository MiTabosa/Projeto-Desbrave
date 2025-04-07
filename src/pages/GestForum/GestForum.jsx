import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import './GestForum.css';
import Button from '../../components/Button/Button';

const GestForum = () => {
  const [forum, setForum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    nome: '',
    categoria: ''
  });

  // Carrega fóruns
  useEffect(() => {
    const fetchForuns = async () => {
      try {
        // Modo de desenvolvimento (mock)
        const mockForuns = [
          { id: 1, nome: "Fórum de Tecnologia", categoria: "Tecnologia" },
          { id: 2, nome: "Fórum de Cultura", categoria: "Cultura" },
          { id: 3, nome: "Fórum de Cidadania digital", categoria: "Cidadania" },
        ];
        setForum(mockForuns);
        setLoading(false);
        
        // Modo produção (descomente quando o backend estiver pronto)
        // const response = await api.get('/forum');
        // setForum(response.data);
        // setLoading(false);
      } catch (err) {
        setError("Erro ao carregar fóruns");
        setLoading(false);
      }
    };
    
    fetchForuns();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.categoria) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      if (formData.id) {
        // Atualização
        await api.put(`/forum/${formData.id}`, formData);
      } else {
        // Criação
        await api.post('/forum', formData);
      }

      // Recarrega os dados
      const response = await api.get('/forum');
      setForum(response.data);
      
      // Reseta formulário
      setFormData({ nome: '', categoria: '' });
      
    } catch (err) {
      console.error("Erro ao salvar fórum:", err);
      alert('Erro ao salvar fórum. Tente novamente.');
    }
  };

  const excluir = async (id) => {
    const confirma = window.confirm('Deseja excluir esse Fórum?');
    
    if(confirma) {
      try {
        await api.delete(`/forum/${id}`);
        setForum(forum.filter(f => f.id !== id));
      } catch (err) {
        console.error("Erro ao excluir fórum:", err);
        alert('Erro ao excluir fórum. Tente novamente.');
      }
    }
  };

  const editar = (forum) => {
    setFormData({
      id: forum.id,
      nome: forum.nome,
      categoria: forum.categoria
    });
  };

  if (loading) return <div className="loading">Carregando fóruns...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className='gestao-forum'>
      {/* Formulário de Cadastro */}
      <div className='formulario'>
        <h2>{formData.id ? 'Editar Fórum' : 'Cadastro de Fóruns'}</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-1'>
            <label>Nome do Fórum:</label>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-1'>
            <label>Categoria:</label>
            <select
              name='categoria'
              value={formData.categoria}
              onChange={handleInputChange}
              required
            >
              <option value=''>Selecione...</option>
              <option value='CidadaniaDigital'>Cidadania Digital</option>
              <option value='Tecnologia'>Tecnologia</option>
              <option value='Cultura'>Cultura</option>
            </select>
          </div>
          <div className='buttonContainerForm'>
            <Button 
              className="buttonGestaoForum" 
              text={formData.id ? 'Atualizar' : 'Cadastrar'} 
              color="#0367A5" 
              size="medium" 
              type="submit"
            />
            {formData.id && (
              <Button 
                className="buttonCancelar" 
                text="Cancelar" 
                color="#f44336" 
                size="medium" 
                onClick={() => setFormData({ nome: '', categoria: '' })}
              />
            )}
          </div>
        </form>
      </div>

      <div className='lista-forum'>
        <h2>Fóruns Cadastrados</h2>
        {forum.length === 0 ? (
          <p>Nenhum fórum cadastrado ainda.</p>
        ) : (
          <ul>
            {forum.map((f) => (
              <li key={f.id}>
                <div className='forum-info'>
                  <h3>{f.nome}</h3>
                  <span className='categoria-badge'>{f.categoria}</span>
                </div>
                <div className='buttonEdicao'>
                  <button className='buttonEditar' onClick={() => editar(f)}>Editar</button>
                  <button className='buttonExcluir' onClick={() => excluir(f.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GestForum;