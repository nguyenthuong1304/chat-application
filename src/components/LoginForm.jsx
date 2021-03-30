import { useState, useRef } from 'react';
import axios from 'axios';

const projectID = '9c77dcf7-3ea1-4099-98cb-b6e9defe8491';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const container = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Đăng nhập nick sai mà đòi vô à ?');
    }
  };

  return (
    <div className="container" id="container" ref={container}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Đăng nhập</h2>
            <h3>{error}</h3>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Đăng nhập với MXH ( Đùa thôi chớ chưa có :v )</p>
            <div className="social-media">
              <a href="test" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Đăng ký</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Đăng nhập với MXH ( Đùa thôi chớ chưa có :v )</p>
            <div className="social-media">
              <a href="test" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="test" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Chưa có tài khoản à ?</h3>
            <p>
              Chưa có thì đăng ký đi chớ ngồi đó mà đọc cái qq gì vậy ?
            </p>
            <button
              type="submit"
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => container.current.classList.add('sign-up-mode')}
            >Đăng ký
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Đăng nhập đi cưng</h3>
            <p> Có tài khoản rồi thì đăng nhập đi, nhìn cái gì mà nhìn (tat3)</p>
            <button
              type="submit"
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => container.current.classList.remove('sign-up-mode')}
            >Đăng nhập
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
