import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import './GestCurso.css';
import Button from '../../components/Button/Button';

const GestCurso = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        categoria: '',
        cargaHoraria: 0,
        status: 'ATIVO',
        urlExterna: ''
    });

    const sanitizeCursos = (data) => {
        if (!data) return [];
        
        try {
            if (typeof data === 'string') data = JSON.parse(data);
            if (Array.isArray(data)) return data;
            if (typeof data === 'object') return [data];
            return [];
        } catch (e) {
            console.error("Falha ao sanitizar dados:", e);
            return [];
        }
    };

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await api.get('/cursos');
                console.log('Resposta da API:', response.data); 
                
                const dadosSanitizados = sanitizeCursos(response.data);
                setCursos(dadosSanitizados);
                
                if (dadosSanitizados.length === 0) {
                    console.warn('A API retornou 0 cursos');
                }
            } catch (err) {
                console.error("Erro completo:", err);
                setError(`Erro ao carregar cursos: ${err.message}`);
                setCursos([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchCursos();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'cargaHoraria' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.titulo || !formData.descricao || !formData.categoria || formData.cargaHoraria <= 0) {
            alert('Preencha todos os campos obrigatórios com valores válidos!');
            return;
        }

        try {
            const cursoData = {
                ...formData,
                cargaHoraria: Number(formData.cargaHoraria)
            };

            if (formData.idcursos) {
                await api.put(`/cursos/${formData.idcursos}`, cursoData);
                alert('Curso atualizado com sucesso!');
            } else {
                await api.post('/cursos', cursoData);
                alert('Curso cadastrado com sucesso!');
            }

            const response = await api.get('/cursos');
            setCursos(sanitizeCursos(response.data));
            
            setFormData({
                titulo: '',
                descricao: '',
                categoria: '',
                cargaHoraria: 0,
                status: 'ATIVO',
                urlExterna: ''
            });
            
        } catch (err) {
            console.error("Erro ao salvar:", err);
            alert(`Erro: ${err.response?.data?.message || err.message}`);
        }
    };

    const excluir = async (id) => {
        if (!window.confirm('Confirmar exclusão?')) return;
        
        try {
            await api.delete(`/cursos/${id}`);
            setCursos(prev => prev.filter(curso => curso.idcursos !== id));
            alert('Curso excluído!');
        } catch (err) {
            console.error("Erro ao excluir:", err);
            alert(`Erro: ${err.response?.data?.message || err.message}`);
        }
    };

    const editar = (curso) => {
        setFormData({
            idcursos: curso.idcursos,
            titulo: curso.titulo || '',
            descricao: curso.descricao || '',
            categoria: curso.categoria || '',
            cargaHoraria: curso.cargaHoraria ? Number(curso.cargaHoraria) : 0,
            status: curso.status || 'ATIVO',
            urlExterna: curso.urlExterna || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className='gestao-cursos'>
            <div className='formulario'>
                <h2>{formData.idcursos ? `Editando Curso #${formData.idcursos}` : 'Novo Curso'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-1'>
                        <label>Título*:</label>
                        <input
                            type='text'
                            name='titulo'
                            value={formData.titulo}
                            onChange={handleInputChange}
                            required
                            placeholder='Nome do curso'
                        />
                    </div>

                    <div className='form-1'>
                        <label>Descrição*:</label>
                        <textarea
                            name='descricao'
                            value={formData.descricao}
                            onChange={handleInputChange}
                            rows='4'
                            required
                            placeholder='Descrição completa'
                        />
                    </div>

                    <div className='form-1'>
                        <label>Categoria*:</label>
                        <select
                            name='categoria'
                            value={formData.categoria}
                            onChange={handleInputChange}
                            required
                        >
                            <option value=''>Selecione...</option>
                            <option value='Cultura'>Cultura</option>
                            <option value='Cidadania Digital'>Cidadania Digital</option>
                            <option value='Tecnologia'>Tecnologia</option>
                        </select>
                    </div>

                    <div className='form-1'>
                        <label>Carga Horária (horas)*:</label>
                        <input
                            type='number'
                            name='cargaHoraria'
                            value={formData.cargaHoraria}
                            onChange={handleInputChange}
                            min='1'
                            required
                        />
                    </div>

                    <div className='form-1'>
                        <label>Status:</label>
                        <select
                            name='status'
                            value={formData.status}
                            onChange={handleInputChange}
                        >
                            <option value='ATIVO'>Ativo</option>
                            <option value='INATIVO'>Inativo</option>
                        </select>
                    </div>

                    <div className='form-1'>
                        <label>URL Externa:</label>
                        <input
                            type='url'
                            name='urlExterna'
                            value={formData.urlExterna}
                            onChange={handleInputChange}
                            placeholder='https://exemplo.com'
                        />
                    </div>
                    
                    <div className='buttonContainerForm'>
                        <Button 
                            className="buttonGestão" 
                            text={formData.idcursos ? 'Atualizar' : 'Cadastrar'} 
                            color="#0367A5" 
                            size="medium" 
                            type="submit"
                        />
                        {formData.idcursos && (
                            <Button 
                                className="buttonCancelar" 
                                text="Cancelar Edição" 
                                color="#f44336" 
                                size="medium" 
                                onClick={() => setFormData({
                                    titulo: '',
                                    descricao: '',
                                    categoria: '',
                                    cargaHoraria: 0,
                                    status: 'ATIVO',
                                    urlExterna: ''
                                })}
                            />
                        )}
                    </div>
                </form>
            </div>

            <div className='lista-cursos'>
                <h2>Cursos Cadastrados</h2>
                
                {!Array.isArray(cursos) ? (
                    <p className="error">Formato de dados inválido</p>
                ) : cursos.length === 0 ? (
                    <p>Nenhum curso encontrado</p>
                ) : (
                    <ul>
                        {cursos.map(curso => (
                            <li key={curso.idcursos || Math.random()}>
                                <h3>{curso.titulo || 'Sem título'} 
                                    <span className={`status-${curso.status?.toLowerCase()}`}>
                                        ({curso.status || 'ATIVO'})
                                    </span>
                                </h3>
                                <p><strong>Categoria:</strong> {curso.categoria || 'Não informada'}</p>
                                <p><strong>Carga Horária:</strong> {curso.cargaHoraria || 0} horas</p>
                                {curso.descricao && <p><strong>Descrição:</strong> {curso.descricao}</p>}
                                {curso.urlExterna && (
                                    <p>
                                        <strong>URL: </strong>
                                        <a href={curso.urlExterna} target="_blank" rel="noreferrer">
                                            {curso.urlExterna.length > 30 
                                                ? `${curso.urlExterna.substring(0, 30)}...` 
                                                : curso.urlExterna}
                                        </a>
                                    </p>
                                )}
                                <div className='buttonEdicao'>
                                    <button 
                                        className='buttonEditar'
                                        onClick={() => editar(curso)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className='buttonExcluir'
                                        onClick={() => excluir(curso.idcursos)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default GestCurso;