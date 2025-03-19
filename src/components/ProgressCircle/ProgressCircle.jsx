const ProgressCircle = ({ percent }) => {
  const radius = 60; // raio
  const thickness = 4; // borda
  const normalized = radius - thickness * 2; // normaliza o raio
  const circum = normalized * 2 * Math.PI; // calculo de circunfêrencia
  const stroke = percent === 100 ? 0.1 : circum - (percent / 100) * circum; // traçado

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/*fundo */}
      <circle
        stroke="#e0e0e0"
        fill="transparent"
        strokeWidth={thickness} 
        r={normalized}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#0367A5"
        fill="transparent"
        strokeWidth={thickness}
        strokeLinecap="round"
        r={normalized}
        cx={radius}
        cy={radius}
        strokeDasharray={circum} // Define o tamanho total do traço
        strokeDashoffset={stroke} // Define a parte "vazia" do círculo
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline={"middle"} // Centraliza verticalmente o texto
        textAnchor="middle" // centraliza
        fontSize="10"
        fontWeight="bold"
        fill="#0367A5"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
