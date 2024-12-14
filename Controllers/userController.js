// export const getProfile = (req, res) => {
//     res.send(`<h1>Welcome, ${req.user.displayName}</h1><p>Email: ${req.user.email || 'Not available'}</p><a href="/auth/logout">Logout</a>`);
//   };



export const getProfile = (req, res) => {
  res.send(`
      <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
                  color: #333;
                  margin: 0;
                  padding: 20px;
              }
              .profile-container {
                  position: absolute;
                  top: 40px; /* Moves the container 20px from the bottom */
                  left: 50%;
                  transform: translateX(-50%); /* Centers the container horizontally */
                  max-width: 500px;
                  width: 100%;
                  max-height: 500px;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
              }

              h1 {
                  font-size: 24px;
                  color:blue;
                  text-align: center;
                  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              }
              p {
                  font-size: 18px;
                  margin: 10px 0;
                  color:grey;
                  text-align: center;
                   font-family: cursive;
              }
              a {
                  display: inline-block;
                  font-family:Times New Roman;
                  text-align: center;
                  margin-top: 20px;
                  padding: 10px 15px;
                  background-color: #007bff;
                  color: #fff;
                  font-size: 1.5em;
                  text-decoration: none;
                  border-radius: 5px;
              }
              a:hover {
                  background-color: #0056b3;
              }
          </style>
      </head>
      <body>
          <div class="profile-container">
              <h1>Welcome, ${req.user.displayName}</h1>
              <p>Email: ${req.user.email || 'Not available'}</p>
              <a href="/auth/logout">Logout</a>
          </div>
      </body>
      </html>
  `);
};
