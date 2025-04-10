import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import './GestQrcodes.css';

const GestQrcodes = () => {
  const [qrcodes, setQrcodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    codigo: '',
    pontos: 0
  });

  // Buscar todos os QR Codes
  const fetchQrcodes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/qrcodes');
      setQrcodes(response.data);
    } catch (err) {
      console.error('Erro ao buscar QR Codes:', err);
      setError(`Erro: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQrcodes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'pontos' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        // Atualizar QR Code existente
        await api.put(`/qrcodes/${formData.id}`, formData);
      } else {
        // Cadastrar novo QR Code
        await api.post('/qrcodes', formData);
      }
      fetchQrcodes();
      setFormData({ codigo: '', pontos: 0 });
    } catch (err) {
      console.error('Erro ao salvar QR Code:', err);
      setError(`Erro: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este QR Code?')) return;
    
    try {
      await api.delete(`/qrcodes/${id}`);
      fetchQrcodes();
    } catch (err) {
      console.error('Erro ao excluir QR Code:', err);
      setError(`Erro: ${err.response?.data?.message || err.message}`);
    }
  };

  if (loading) return <div className="loading">Carregando QR Codes...</div>;

  return (
    <div className="gestao-qrcodes">

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="qr-form">
        <h2>{formData.id ? `Editando QR Code` : 'Novo QR Code'}</h2>
        
        <div className="form-group">
          <label>
            Código:
            <input
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              required
              placeholder="Ex: MarcoZero"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Pontos:
            <input
              type="number"
              name="pontos"
              value={formData.pontos}
              onChange={handleChange}
              min="0"
              required
            />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {formData.id ? 'Atualizar' : 'Cadastrar'}
          </button>
          {formData.id && (
            <button 
              type="button" 
              className="btn-cancel"
              onClick={() => setFormData({ codigo: '', pontos: 0 })}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Listagem */}
      <div className="qr-list">
        <h2>QR Codes Cadastrados</h2>
        
        {qrcodes.length === 0 ? (
          <p>Nenhum QR Code cadastrado ainda.</p>
        ) : (
          <ul>
            {qrcodes.map(qr => (
              <li key={qr.id}>
                <div className="qr-info">
                  <span className="qr-code">{qr.codigo}</span>
                  <span className="qr-points">{qr.pontos} pontos</span>
                </div>
                <div className="qr-actions">
                  <button 
                    className="btn-edit"
                    onClick={() => setFormData(qr)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(qr.id)}
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

export default GestQrcodes;