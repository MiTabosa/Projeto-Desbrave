import { useState } from 'react';
// import data from './data/cursos.json';
import './GestCurso.css';

const GestForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        categoria: '',
        cargaHoraria: '',
        urlExterna: ''
    });

    const change = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log('Cadastrar curso', formData);
    };

    return (
        <div className='formulario'>
            <h2 className='form-text'>Cadastro de Cursos</h2>
            <form onSubmit={submit}>
                <div className='form-1'>
                    <label>Nome do Curso:</label>
                    <input
                        type='text'
                        name='nome'
                        value={formData.nome}
                        onChange={change}
                    />
                </div>

                <div className='form-1'>
                    <label>Descrição:</label>
                    <textarea
                        name='descricao'
                        value={formData.descricao}
                        onChange={change}
                    />
                </div>

                <div className='form-1'>
                    <label>Categoria:</label>
                    <select
                        name='categoria'
                        value={formData.categoria}
                        onChange={change}
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
                        onChange={change}
                    />
                </div>

                <div className='form-1'>
                    <label>URL Externa:</label>
                    <input
                        type='text'
                        name='urlExterna'
                        value={formData.urlExterna}
                        onChange={change}
                    />
                </div>

                <button type='submit'>Cadastrar Curso</button>
            </form>
        </div>
    );
};

export default GestForm;
    
                
