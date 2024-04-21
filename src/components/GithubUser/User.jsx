/* eslint-disable react/prop-types */
export const User = ({ user, clickToClose }) => {
  const { avatar_url, created_at, followers, name, login } = user;
  return (
    <div className="user-model">
      <div className="user-data-container">
        <span id="icon" onClick={clickToClose}>
          &times;
        </span>
        <div className="user-image">
          <img src={avatar_url} alt="name" />
        </div>
        <div className="user-info">
          <p>
            Login: <span>{login}</span>
          </p>
          <p>
            Name: <span>{name}</span>{" "}
          </p>
          <p>
            Followers: <span>{followers}</span>
          </p>
          <p>
            Account Created on: <span>{created_at}</span>
          </p>

          <p>
            <a href={`https://github.com/${login}`} target="_blank">
              Go To Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
