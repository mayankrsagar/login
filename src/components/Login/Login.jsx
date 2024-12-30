import {
  Fragment,
  useEffect,
  useState,
} from 'react';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);

  const validate = () => {
    if (form.username !== "user") {
      setError(true);
      return false;
    }
    if (form.password !== "password") {
      setError(true);
      return false;
    }
    setError("");
    return true;
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (validate()) {
      setLogin(true);
    }
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    // setError(false);
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => setError(false), 4000);

    return () => clearTimeout(timeoutId);
  }, [error]);

  return (
    <Fragment>
      {!login ? (
        <form onSubmit={handleForm}>
          <Box display="flex" flexDirection="column" gap={2}>
            {error && (
              <Typography color="error" variant="body2">
                Invalid Username and password
              </Typography>
            )}
            <label htmlFor="username">UserName:</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleValue}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleValue}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      ) : (
        <Fragment>
          <Typography variant="h5">Welcome, user!</Typography>
          <Button
            onClick={() => {
              setLogin(false);
              setForm({ username: "", password: "" });
            }}
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
