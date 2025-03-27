import React, { useState } from "react";
import "./Certificados.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import BottomDashboard from "../../components/BottomDashboard/BottomDashboard";

export default function Certificado() {
  return (
      <Sidebar>
        <BottomDashboard>
          <div className="CertificadoContainer">
  
        <h1 className="tituloCertificado">Meus Certificados</h1>
  
        <div className="Curso1Certif">
            Curso 1: Frevo ao Manguebeat 
            <a href="src\assets\img-certificado.jpeg" className="BaixarCertif" download="src\assets\img-certificado.jpeg">
            Download
            </a>
            </div>
            <div className="Curso2Certif">
                Curso 2:
            </div>
            <div className="Curso3Certif">
                Curso 3:
            </div>
            <div className="Curso4Certif">
                Curso 4:
            </div>
        </div>
        </BottomDashboard>
      </Sidebar>
    );
  }
  