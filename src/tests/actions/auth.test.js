import { Login, Logout } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = 'abc123';
  const action = Login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = Logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
