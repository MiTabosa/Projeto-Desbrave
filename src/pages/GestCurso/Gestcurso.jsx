import { useState } from 'react';
import data from '../../data/cursos.json';
import Navbar from '../../components/Navbar/Navbar'
import './GestCurso.css';
import Button from '../../components/Button/Button';

const GestCurso = () => {
    const [cursos, setCursos] = useState(data.cursos); 
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        cargaHoraria: '',
        urlExterna: '',
        empresa: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nome || !formData.descricao || !formData.categoria || !formData.cargaHoraria || !formData.empresa) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const novoCurso = {
            id: cursos.length + 1,
            ...formData
        };

        setCursos([...cursos, novoCurso]);

        setFormData({
            nome: '',
            descricao: '',
            categoria: '',
            cargaHoraria: '',
            urlExterna: '',
            empresa: '' 
        });

        console.log('Curso cadastrado:', novoCurso);
    };
    // const exclude = ()

    return (
        <div className='gestao-cursos'>
            <Navbar />

            {/* Formulário de Cadastro */}
            <div className='formulario'>
                <h2>Cadastro de Cursos</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-1'>
                        <label>Nome do Curso:</label>
                        <input
                            type='text'
                            name='nome'
                            value={formData.nome}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='form-1'>
                        <label>Descrição:</label>
                        <textarea
                            name='descricao'
                            value={formData.descricao}
                            onChange={handleInputChange}
                            rows='4'
                            cols='50'
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
                            <option value='Front-end'>Front-end</option>
                            <option value='Back-end'>Back-end</option>
                        </select>
                    </div>

                    <div className='form-1'>
                        <label>Carga Horária:</label>
                        <input
                            type='text'
                            name='cargaHoraria'
                            value={formData.cargaHoraria}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='form-1'>
                        <label>URL Externa:</label>
                        <input
                            type='text'
                            name='urlExterna'
                            value={formData.urlExterna}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-1'>
                        <label>Empresa:</label>
                        <input
                            type='text'
                            name='empresa'
                            value={formData.empresa}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>

                    <Button className="buttonGestão" text="Vamos Desbravar" color="#0367A5" size="medium" onClick={() => navigate("/login")} />
                </form>
            </div>

            {/* Lista de Cursos Cadastrados */}
            <div className='lista-cursos'>
                <h2>Cursos Cadastrados</h2>
                <ul>
                    {cursos.map((curso) => (
                        <li key={curso.id}>
                            <h3>{curso.nome}</h3>
                            <p><strong>Descrição:</strong> {curso.descricao}</p>
                            <p><strong>Categoria:</strong> {curso.categoria}</p>
                            <p><strong>Carga Horária:</strong> {curso.cargaHoraria}</p>
                            <p><strong>URL Externa:</strong> <a href={curso.urlExterna} target='_blank' rel='noopener noreferrer'>{curso.urlExterna}</a></p>
                            <p><strong>Empresa:</strong> {curso.empresa}</p>
                            {/* <button onClick={}>Alterar</button>
                            <button onClick={exclude}>Excluir</button> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GestCurso;