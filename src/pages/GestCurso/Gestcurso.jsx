import { useState, useEffect } from 'react';
import data from '../../data/cursos.json';
import Navbar from '../../components/Navbar/Navbar';
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

    useEffect(() => {
        localStorage.setItem('cursos', JSON.stringify(cursos));
    }, [cursos]);

    useEffect(() => {
        const savedCursos = JSON.parse(localStorage.getItem('cursos')) || [];
        setCursos(savedCursos);
    }, []);

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

        if (formData.urlExterna && !formData.urlExterna.startsWith('http')) {
            alert('A URL externa deve começar com "http" ou "https".');
            return;
        }

        if (formData.id) {
            // Atualizar 
            const updatedCursos = cursos.map(curso =>
                curso.id === formData.id ? { ...formData } : curso
            );
            setCursos(updatedCursos);
        } else {
            // Adicionar novo curso
            const novoCurso = {
                id: cursos.length + 1,
                ...formData
            };
            setCursos([...cursos, novoCurso]);
        }

        setFormData({
            nome: '',
            descricao: '',
            categoria: '',
            cargaHoraria: '',
            urlExterna: '',
            empresa: ''
        });
    };

    const excluir = (id) => {
        const confirmar =  window.confirm('Deseja excluir o curso?')
            if(confirmar) {
                const updatedCursos = cursos.filter(curso => curso.id !== id);
        setCursos(updatedCursos);
        console.log('Curso excluido com sucesso')
        }
      
    };

    const editar = (curso) => {
        setFormData({
            id: curso.id,
            nome: curso.nome,
            descricao: curso.descricao,
            categoria: curso.categoria,
            cargaHoraria: curso.cargaHoraria,
            urlExterna: curso.urlExterna,
            empresa: curso.empresa
        });
    };

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
                    <div className='buttonContainerForm'>
                        <Button className="buttonGestão" text="Cadastrar" color="#0367A5" size="medium" onClick={() => navigate("/login")} />
                    </div>
                </form>
            </div>

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
                            <div className='buttonEdicao'>
                                <button className='buttonEditar' onClick={() => editar(curso)}>Editar</button>
                                <button className='buttonExcluir' onClick={() => excluir(curso.id)}>Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GestCurso;