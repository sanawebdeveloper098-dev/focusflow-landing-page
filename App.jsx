import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  // State for Popup Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('timer');
  const [modalTasks, setModalTasks] = useState([]);
  const [modalInput, setModalInput] = useState('');

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert('Time is up!');
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const addModalTask = (e) => {
    e.preventDefault();
    if (!modalInput.trim()) return;
    setModalTasks([...modalTasks, { id: Date.now(), text: modalInput, completed: false }]);
    setModalInput('');
  };

  const toggleModalTask = (id) => {
    setModalTasks(modalTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteModalTask = (id) => {
    setModalTasks(modalTasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Focus<span>Flow</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#features" className="nav-btn">Get Started</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div>
          <span className="tag">SMART PRODUCTIVITY PLATFORM</span>
          <h1>Plan with clarity. Work with <span>focus.</span></h1>
          <p className="hero-text">
            FocusFlow helps you organize tasks, build better habits, and track your progress in one simple workspace.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="primary-btn">Start for Free</a>
            <a href="#how-it-works" className="secondary-btn">Explore Features</a>
          </div>
          <div className="hero-users">
            <div className="avatars">
              <span>SA</span>
              <span>AM</span>
              <span>JK</span>
            </div>
            <p><strong>10,000+</strong> people are building better routines.</p>
          </div>
        </div>

        {/* Hero right side: Dashboard Mockup */}
        <div className="dashboard-card" style={{ padding: '25px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold', color: '#093A3E', fontSize: '18px' }}>Sparkalgo Dashboard</span>
            <span style={{ fontSize: '12px', background: '#E2F0ED', color: '#093A3E', padding: '5px 10px', borderRadius: '12px', fontWeight: 'bold' }}>Active</span>
          </div>
          <div style={{ background: '#F8F9FA', padding: '18px', borderRadius: '12px', marginBottom: '15px' }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>Resource Allocation</p>
            <div style={{ background: '#E2F0ED', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: '75%', background: '#093A3E', height: '100%' }}></div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#F8F9FA', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#666', margin: '0' }}>Target</p>
              <h3 style={{ color: '#093A3E', margin: '5px 0 0 0' }}>40%</h3>
            </div>
            <div style={{ background: '#F8F9FA', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#666', margin: '0' }}>Productivity</p>
              <h3 style={{ color: '#093A3E', margin: '5px 0 0 0' }}>94.6%</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <div className="brands">
        <p>Trusted by productive people, students, and growing teams</p>
        <div className="brand-list">
          <span>FLOWMIND</span>
          <span>STUDYHUB</span>
          <span>WORKSPACE</span>
          <span>HABITLY</span>
          <span>GOALTRACK</span>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="section-heading">
          <span className="tag">POWERFUL FEATURES</span>
          <h2>Everything you need to stay on track</h2>
          <p>FocusFlow brings your daily work, goals, and progress together in one peaceful workspace.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Task Management</h3>
            <p>Create, organize, and complete tasks without feeling overwhelmed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱</div>
            <h3>Focus Timer</h3>
            <p>Use focused work sessions to reduce distractions and stay productive.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Progress Tracking</h3>
            <p>See your weekly progress and celebrate every small achievement.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Reminders</h3>
            <p>Never forget important tasks, habits, or deadlines again.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section with Updated 2nd Image Style */}
      <section id="how-it-works" className="how-it-works section-padding">
        <div className="how-image" style={{ position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Background Soft Green Circle */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            background: '#DCECE7',
            borderRadius: '50%',
            zIndex: 1
          }}></div>

          {/* Top-Left Card: Today's Focus */}
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '20px',
            background: '#ffffff',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
            zIndex: 2,
            width: '180px'
          }}>
            <p style={{ fontSize: '12px', color: '#666', margin: '0 0 5px 0' }}>Today's Focus</p>
            <h3 style={{ color: '#093A3E', margin: '0 0 12px 0', fontSize: '20px' }}>2h 30m</h3>
            <div style={{ background: '#E2F0ED', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '75%', background: '#093A3E', height: '100%' }}></div>
            </div>
          </div>

          {/* Bottom-Right Card: Completed Tasks */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '20px',
            background: '#ffffff',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
            zIndex: 3,
            width: '190px'
          }}>
            <p style={{ fontSize: '12px', color: '#666', margin: '0 0 5px 0' }}>Completed Tasks</p>
            <h3 style={{ color: '#093A3E', margin: '0 0 5px 0', fontSize: '22px' }}>08 / 10</h3>
            <p style={{ fontSize: '11px', color: '#2e7d32', margin: 0, fontWeight: '600' }}>Great progress today!</p>
          </div>
        </div>

        <div className="how-content">
          <span className="tag">HOW IT WORKS</span>
          <h2>Build a better routine in three simple steps</h2>
          <div className="step">
            <div className="step-number">01</div>
            <div>
              <h3>Create your plan</h3>
              <p>Add your tasks, goals, and priorities for the day.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <div>
              <h3>Focus on what matters</h3>
              <p>Use the focus timer and work without distractions.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <div>
              <h3>Track your growth</h3>
              <p>Review your progress and improve your routine every week.</p>
            </div>
          </div>
          <div style={{ marginTop: '25px' }}>
            <button 
              onClick={() => { setIsModalOpen(true); setModalTab('timer'); }} 
              className="secondary-btn" 
              style={{ cursor: 'pointer', border: '1px solid #093A3E', background: 'transparent', color: '#093A3E', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' }}
            >
              Try Task Tracker Demo
            </button>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(2px)'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '540px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: '#093A3E', margin: 0, fontSize: '22px' }}>Interactive Workspace</h2>
              <span style={{ fontSize: '13px', background: '#E2F0ED', color: '#093A3E', padding: '6px 14px', borderRadius: '20px', fontWeight: '600' }}>
                {modalTab === 'timer' ? 'Pomodoro Mode' : 'Task Manager'}
              </span>
            </div>

            {modalTab === 'timer' ? (
              <div style={{
                background: '#F0F6F4',
                padding: '25px',
                borderRadius: '16px',
                textAlign: 'center',
                marginBottom: '20px',
                border: '1px solid #E2F0ED'
              }}>
                <p style={{ color: '#555', fontSize: '14px', margin: '0 0 10px 0' }}>Time Remaining</p>
                <h1 style={{ color: '#093A3E', fontSize: '42px', margin: '0 0 20px 0', fontWeight: '700' }}>{formatTime(timeLeft)}</h1>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => setIsRunning(!isRunning)} 
                    style={{ background: '#093A3E', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
                  >
                    {isRunning ? 'Pause' : 'Start'}
                  </button>
                  <button 
                    onClick={() => { setIsRunning(false); setTimeLeft(25 * 60); }} 
                    style={{ background: '#F8F9FA', color: '#333', border: '1px solid #ccc', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <div style={{
                background: '#F0F6F4',
                padding: '20px',
                borderRadius: '16px',
                marginBottom: '20px',
                border: '1px solid #E2F0ED',
                textAlign: 'left'
              }}>
                <p style={{ color: '#555', fontSize: '14px', margin: '0 0 10px 0', fontWeight: '600' }}>Manage Your Focus Tasks</p>
                <form onSubmit={addModalTask} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <input 
                    type="text" 
                    value={modalInput} 
                    onChange={(e) => setModalInput(e.target.value)} 
                    placeholder="Add a new task..." 
                    style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none', background: '#fff' }}
                  />
                  <button 
                    type="submit" 
                    style={{ background: '#093A3E', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Add
                  </button>
                </form>
                <ul style={{ listStyle: 'none', padding: 0, maxHeight: '120px', overflowY: 'auto', margin: 0 }}>
                  {modalTasks.length === 0 ? (
                    <p style={{ color: '#888', textAlign: 'center', fontSize: '13px', margin: '10px 0' }}>No tasks added yet.</p>
                  ) : (
                    modalTasks.map(task => (
                      <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: '#fff', borderRadius: '6px', marginBottom: '6px', border: '1px solid #eee' }}>
                        <span 
                          onClick={() => toggleModalTask(task.id)} 
                          style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : '#333', fontSize: '14px' }}
                        >
                          {task.text}
                        </span>
                        <button 
                          onClick={() => deleteModalTask(task.id)} 
                          style={{ background: 'transparent', border: 'none', color: '#e74c3c', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
                        >
                          ✕
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <button 
                onClick={() => setModalTab('timer')} 
                style={{
                  background: modalTab === 'timer' ? '#093A3E' : '#F4F6F5',
                  color: modalTab === 'timer' ? '#fff' : '#093A3E',
                  border: modalTab === 'timer' ? 'none' : '1px solid #ccc',
                  padding: '10px 25px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Show Timer
              </button>
              <button 
                onClick={() => setModalTab('tasks')} 
                style={{
                  background: modalTab === 'tasks' ? '#093A3E' : '#F4F6F5',
                  color: modalTab === 'tasks' ? '#fff' : '#093A3E',
                  border: modalTab === 'tasks' ? 'none' : '1px solid #ccc',
                  padding: '10px 25px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Show Tasks
              </button>
            </div>

            <button 
              onClick={() => setIsModalOpen(false)} 
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                fontSize: '18px',
                color: '#888',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="stats">
        <div className="stat">
          <h2>10K+</h2>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <h2>85%</h2>
          <p>Better Daily Focus</p>
        </div>
        <div className="stat">
          <h2>1M+</h2>
          <p>Tasks Completed</p>
        </div>
        <div className="stat">
          <h2>4.9/5</h2>
          <p>User Rating</p>
        </div>
      </div>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding">
        <div className="section-heading">
          <span className="tag">USER REVIEWS</span>
          <h2>Loved by people who value their time</h2>
        </div>
        <div className="review-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"FocusFlow helped me organize my university work and stop procrastinating. The dashboard is simple and calming."</p>
            <div className="review-user">
              <div className="user-avatar">S</div>
              <div>
                <h4>Sana Arshad</h4>
                <span>Student</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"I use it every morning to plan my day. The focus timer has made a real difference in my work routine."</p>
            <div className="review-user">
              <div className="user-avatar">A</div>
              <div>
                <h4>Ali Raza</h4>
                <span>Freelancer</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Clean design, easy task tracking, and no unnecessary distractions. It feels made for productive people."</p>
            <div className="review-user">
              <div className="user-avatar">M</div>
              <div>
                <h4>Maryam Khan</h4>
                <span>Content Creator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div>
          <span className="tag">START TODAY</span>
          <h2>Your focused life starts here.</h2>
          <p>Plan your day, protect your attention, and make progress every day.</p>
          <a href="#features" className="light-btn">Get Started for Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-top">
          <div>
            <h2 className="logo footer-logo">Focus<span>Flow</span></h2>
            <p>Plan with clarity. Work with focus. Grow with purpose.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#reviews">Reviews</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#home">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 FocusFlow. All rights reserved.</p>
          <p>Made for better focus.</p>
        </div>
      </footer>
    </div>
  );
}