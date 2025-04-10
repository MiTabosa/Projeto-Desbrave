import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import './GestCurso.css';
import Button from '../../components/Button/Button';

const GestCurso = () => {
    const [cursos, setCursos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    
    const [dadosFormulario, setDadosFormulario] = useState({
        titulo: '',
        descricao: '',
        categoria: '',
        cargaHoraria: 0,
        status: 'ATIVO',
        urlExterna: ''
    });

    const sanitizarCursos = (dados) => {
        if (!dados) return [];
        
        try {
            if (typeof dados === 'string') dados = JSON.parse(dados);
            if (Array.isArray(dados)) return dados;
            if (typeof dados === 'object') return [dados];
            return [];
        } catch (e) {
            console.error("Falha ao sanitizar dados:", e);
            return [];
        }
    };

    useEffect(() => {
        const buscarCursos = async () => {
            try {
                const resposta = await api.get('/cursos');
                console.log('Resposta da API:', resposta.data); 
                
                const dadosSanitizados = sanitizarCursos(resposta.data);
                setCursos(dadosSanitizados);
                
                if (dadosSanitizados.length === 0) {
                    console.warn('A API retornou 0 cursos');
                }
            } catch (err) {
                console.error("Erro completo:", err);
                setErro(`Erro ao carregar cursos: ${err.message}`);
                setCursos([]);
            } finally {
                setCarregando(false);
            }
        };
        
        buscarCursos();
    }, []);

    const handleMudancaInput = (e) => {
        const { name, value } = e.target;
        setDadosFormulario(prev => ({
            ...prev,
            [name]: name === 'cargaHoraria' ? Number(value) : value
        }));
    };

    const handleEnvio = async (e) => {
        e.preventDefault();

        if (!dadosFormulario.titulo || !dadosFormulario.descricao || !dadosFormulario.categoria || dadosFormulario.cargaHoraria <= 0) {
            alert('Preencha todos os campos obrigatórios com valores válidos!');
            return;
        }

        try {
            const dadosCurso = {
                ...dadosFormulario,
                cargaHoraria: Number(dadosFormulario.cargaHoraria)
            };

            if (dadosFormulario.idcursos) {
                await api.put(`/cursos/${dadosFormulario.idcursos}`, dadosCurso);
                alert('Curso atualizado com sucesso!');
            } else {
                await api.post('/cursos', dadosCurso);
                alert('Curso cadastrado com sucesso!');
            }

            const resposta = await api.get('/cursos');
            setCursos(sanitizarCursos(resposta.data));
            
            setDadosFormulario({
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

    const excluirCurso = async (id) => {
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

    const editarCurso = (curso) => {
        setDadosFormulario({
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

    if (carregando) return <div className="carregando">Carregando...</div>;
    if (erro) return <div className="erro">{erro}</div>;

    return (
        <div className='gestao-cursos'>
            <div className='formulario'>
                <h2>{dadosFormulario.idcursos ? `Editando Curso #${dadosFormulario.idcursos}` : 'Novo Curso'}</h2>
                <form onSubmit={handleEnvio}>
                    <div className='grupo-formulario'>
                        <label>Título*:</label>
                        <input
                            type='text'
                            name='titulo'
                            value={dadosFormulario.titulo}
                            onChange={handleMudancaInput}
                            required
                            placeholder='Nome do curso'
                        />
                    </div>

                    <div className='grupo-formulario'>
                        <label>Descrição*:</label>
                        <textarea
                            name='descricao'
                            value={dadosFormulario.descricao}
                            onChange={handleMudancaInput}
                            rows='4'
                            required
                            placeholder='Descrição completa'
                        />
                    </div>

                    <div className='grupo-formulario'>
                        <label>Categoria*:</label>
                        <select
                            name='categoria'
                            value={dadosFormulario.categoria}
                            onChange={handleMudancaInput}
                            required
                        >
                            <option value=''>Selecione...</option>
                            <option value='Cultura'>Cultura</option>
                            <option value='Cidadania Digital'>Cidadania Digital</option>
                            <option value='Tecnologia'>Tecnologia</option>
                        </select>
                    </div>

                    <div className='grupo-formulario'>
                        <label>Carga Horária (horas)*:</label>
                        <input
                            type='number'
                            name='cargaHoraria'
                            value={dadosFormulario.cargaHoraria}
                            onChange={handleMudancaInput}
                            min='1'
                            required
                        />
                    </div>

                    <div className='grupo-formulario'>
                        <label>Status:</label>
                        <select
                            name='status'
                            value={dadosFormulario.status}
                            onChange={handleMudancaInput}
                        >
                            <option value='ATIVO'>Ativo</option>
                            <option value='INATIVO'>Inativo</option>
                        </select>
                    </div>

                    <div className='grupo-formulario'>
                        <label>URL Externa:</label>
                        <input
                            type='url'
                            name='urlExterna'
                            value={dadosFormulario.urlExterna}
                            onChange={handleMudancaInput}
                            placeholder='https://exemplo.com'
                        />
                    </div>
                    
                    <div className='container-botoes'>
                        <Button 
                            className="botao-gestao" 
                            text={dadosFormulario.idcursos ? 'Atualizar' : 'Cadastrar'} 
                            color="#0367A5" 
                            size="medium" 
                            type="submit"
                        />
                        {dadosFormulario.idcursos && (
                            <Button 
                                className="botao-cancelar" 
                                text="Cancelar Edição" 
                                color="#f44336" 
                                size="medium" 
                                onClick={() => setDadosFormulario({
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
                    <p className="erro">Formato de dados inválido</p>
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
                                <div className='botoes-edicao'>
                                    <button 
                                        className='botao-editar'
                                        onClick={() => editarCurso(curso)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className='botao-excluir'
                                        onClick={() => excluirCurso(curso.idcursos)}
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