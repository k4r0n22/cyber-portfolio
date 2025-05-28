import React, { useState, useEffect } from 'react';
import { Shield, Server, Code, Mail, Github, Linkedin, ExternalLink, Download, Terminal, Lock, Network, Database } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showMatrix, setShowMatrix] = useState(false);

  const terminalCommands = [
    '$ whoami',
    'asir_graduate',
    '$ cat skills.txt',
    'Administración de Sistemas',
    'Redes de Computadores', 
    'Ciberseguridad',
    'React Development',
    '$ sudo apt update && upgrade',
    'Actualizando conocimientos...',
    '$ ./deploy_portfolio.sh',
    'Portfolio desplegado con éxito ✓'
  ];

  // HackTheBox icon component
  const HackTheBoxIcon = ({ size = 24, color = "#9aff00" }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle email
  const handleSendEmail = () => {
    const subject = encodeURIComponent('Contacto desde Portfolio - Oportunidad Laboral');
    const body = encodeURIComponent(`Hola,

Me pongo en contacto contigo después de revisar tu portfolio. Me interesa conocer más sobre tu experiencia en:
- Administración de Sistemas
- Ciberseguridad
- Desarrollo

¿Podríamos agendar una llamada para conversar sobre oportunidades de colaboración?

Saludos,`);
    
    window.location.href = `mailto:cjgl2004@gmail.com?subject=${subject}&body=${body}`;
  };

useEffect(() => {
  setIsVisible(true);

  // Persistente entre llamadas
  const i = { current: 0 };

  const typeWriter = () => {
    if (i.current < terminalCommands.length) {
      setTerminalLines(prev => [...prev, terminalCommands[i.current]]);
      i.current++;
      setTimeout(typeWriter, 1000);
    }
  };

  const startTyping = setTimeout(typeWriter, 2000);

  // Matrix effect toggle
  const matrixInterval = setInterval(() => {
    setShowMatrix(prev => !prev);
  }, 5000);

  return () => {
    clearTimeout(startTyping);
    clearInterval(matrixInterval);
  };
}, []);


  const projects = [
    {
      title: "Sistema de Monitoreo de Red",
      description: "Dashboard en tiempo real para monitorear el tráfico de red y detectar anomalías de seguridad.",
      tech: ["React", "Node.js", "Socket.io", "Wireshark"],
      icon: <Network size={24} />,
      status: "Completado"
    },
    {
      title: "Análisis de Vulnerabilidades",
      description: "Herramienta automatizada para escaneo y análisis de vulnerabilidades en infraestructuras IT.",
      tech: ["Python", "Nmap", "OpenVAS", "Docker"],
      icon: <Shield size={24} />,
      status: "En desarrollo"
    },
    {
      title: "Sistema de Gestión de Logs",
      description: "Centralización y análisis de logs de seguridad con alertas automáticas.",
      tech: ["ELK Stack", "Logstash", "Kibana", "Elasticsearch"],
      icon: <Database size={24} />,
      status: "Planificado"
    }
  ];

  const skills = [
    { name: "Administración de Sistemas", level: 90, icon: <Server size={20} /> },
    { name: "Redes y Protocolos", level: 85, icon: <Network size={20} /> },
    { name: "Ciberseguridad", level: 80, icon: <Shield size={20} /> },
    { name: "React Development", level: 75, icon: <Code size={20} /> },
    { name: "Pentesting", level: 70, icon: <Lock size={20} /> },
    { name: "Análisis Forense", level: 65, icon: <Terminal size={20} /> }
  ];

  const certifications = [
    "Técnico Superior en ASIR",
    "CompTIA Security+ (En proceso)",
    "Cisco CCNA (Planificado)",
    "CEH - Certified Ethical Hacker (Objetivo 2025)"
  ];

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .nav-link:hover {
            color: #22d3ee !important;
          }
          .social-link:hover {
            color: #22d3ee !important;
          }
          .project-card:hover {
            border-color: #22d3ee !important;
            transform: scale(1.02) !important;
          }
          .cert-item:hover {
            border-color: #22d3ee !important;
          }
          .primary-btn:hover {
            transform: scale(1.05) !important;
          }
          .secondary-btn:hover {
            background: #22d3ee !important;
            color: black !important;
          }
          .htb-link:hover {
            color: #9aff00 !important;
          }
        `}
      </style>

      {/* Matrix Background Effect */}
      {showMatrix && (
        <div style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {Array(50).fill().map((_, i) => (
            <div key={i} 
                 style={{
                   position: 'absolute',
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   color: '#10b981',
                   fontSize: '12px',
                   fontFamily: 'monospace',
                   animation: `pulse 2s infinite ${Math.random() * 2}s`
                 }}>
              01101001
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px)',
        zIndex: 50,
        borderBottom: '1px solid rgba(34, 211, 238, 0.2)',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={32} color="#22d3ee" />
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              CyberPortfolio
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Inicio', 'Sobre mí', 'Proyectos', 'Skills', 'Contacto'].map((item) => (
              <a
                key={item}
                className="nav-link"
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  cursor: 'pointer'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '6rem 1.5rem 4rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'linear-gradient(45deg, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Cyber
              </span>
              <br />
              <span>Security</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
              Especialista en Sistemas & Seguridad
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af', lineHeight: 1.6, marginBottom: '1rem' }}>
                Graduado en <span style={{ color: '#22d3ee', fontWeight: '600' }}>Administración de Sistemas Informáticos en Red </span> 
                y actualmente cursando <span style={{ color: '#3b82f6', fontWeight: '600' }}>Ingeniería en Ciberseguridad</span>.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af', lineHeight: 1.6 }}>
                Transformando la seguridad digital mediante soluciones innovadoras y administración de sistemas robusta.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <button 
                className="primary-btn"
                onClick={handleDownloadCV}
                style={{
                  background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s',
                  textDecoration: 'none'
                }}
              >
                <Download size={20} />
                <span>Descargar CV</span>
              </button>
              <button 
                className="secondary-btn"
                onClick={handleSendEmail}
                style={{
                  border: '2px solid #22d3ee',
                  color: '#22d3ee',
                  background: 'transparent',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                  textDecoration: 'none'
                }}
              >
                <Mail size={20} />
                <span>Contacto</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/k4r0n22" className="social-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-gonzález-ledo-32b9b1266/?locale=es_ES" className="social-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
                <Linkedin size={24} />
              </a>
              <a href="https://app.hackthebox.com/users/1417656" className="social-link htb-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
                <HackTheBoxIcon size={24} />
              </a>
            </div>
          </div>

          {/* Terminal Simulation */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            borderRadius: '0.5rem',
            border: '1px solid #374151',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#374151',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ color: '#9ca3af', fontSize: '0.875rem', marginLeft: '1rem' }}>terminal</span>
            </div>
            <div style={{ padding: '1rem', height: '250px', overflow: 'hidden' }}>
              <pre style={{
                color: '#10b981',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
                margin: 0
              }}>
                {terminalLines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
                <span style={{ animation: 'blink 1s infinite' }}>_</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Competencias Técnicas
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              {skills.map((skill, index) => (
                <div key={skill.name} style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '600' }}>
                      <div style={{ color: '#22d3ee' }}>{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                    <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#374151',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#22d3ee',
                marginBottom: '1rem'
              }}>
                Certificaciones
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {certifications.map((cert, index) => (
                  <div key={index} 
                       className="cert-item"
                       style={{
                         display: 'flex',
                         alignItems: 'center',
                         gap: '0.75rem',
                         padding: '0.75rem',
                         background: 'rgba(55, 65, 81, 0.5)',
                         borderRadius: '0.5rem',
                         border: '1px solid #374151',
                         transition: 'border-color 0.3s'
                       }}>
                    <Shield size={20} color="#22d3ee" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Proyectos Destacados
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div key={index} 
                   className="project-card"
                   style={{
                     background: 'rgba(55, 65, 81, 0.3)',
                     backdropFilter: 'blur(20px)',
                     borderRadius: '0.5rem',
                     border: '1px solid #374151',
                     padding: '1.5rem',
                     transition: 'all 0.3s'
                   }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ color: '#22d3ee' }}>{project.icon}</div>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    background: project.status === 'Completado' ? 'rgba(34, 197, 94, 0.2)' :
                               project.status === 'En desarrollo' ? 'rgba(251, 191, 36, 0.2)' :
                               'rgba(59, 130, 246, 0.2)',
                    color: project.status === 'Completado' ? '#22c55e' :
                           project.status === 'En desarrollo' ? '#fbbf24' :
                           '#3b82f6'
                  }}>
                    {project.status}
                  </span>
                </div>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: '#9ca3af',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '0.25rem 0.5rem',
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#93c5fd',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#22d3ee',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  <span>Ver proyecto</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ¿Listo para colaborar?
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#9ca3af',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Estoy disponible para oportunidades profesionales en administración de sistemas, 
            ciberseguridad y desarrollo de soluciones tecnológicas innovadoras.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              className="primary-btn"
              onClick={handleSendEmail}
              style={{
                background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.3s'
              }}
            >
              <Mail size={20} />
              <span>Enviar mensaje</span>
            </button>
            
            <button 
              className="secondary-btn"
              onClick={handleDownloadCV}
              style={{
                border: '2px solid #22d3ee',
                color: '#22d3ee',
                background: 'transparent',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s'
              }}
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1.5rem',
        borderTop: '1px solid #374151'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={24} color="#22d3ee" />
            <span style={{ fontWeight: '600' }}>CyberPortfolio 2025</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/k4r0n22" className="social-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/carlos-gonzález-ledo-32b9b1266/?locale=es_ES" className="social-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
              <Linkedin size={20} />
            </a>
            <a href="https://app.hackthebox.com/users/1417656" className="social-link htb-link" style={{ color: '#9ca3af', transition: 'color 0.3s' }}>
              <HackTheBoxIcon size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;