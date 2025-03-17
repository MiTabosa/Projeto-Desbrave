const ProgressCircle = ({ percent }) => {
  const radius = 60;
  const thickness = 4;
  const normalized = radius - thickness * 2;
  const circum = normalized * 2 * Math.PI;
  const stroke = percent === 100 ? 0.1 : circum - (percent / 100) * circum;

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
        strokeDasharray={circum}
        strokeDashoffset={stroke}
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline={"middle"}
        textAnchor="middle"
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
