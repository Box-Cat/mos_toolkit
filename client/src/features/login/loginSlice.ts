
import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../app/hooks';

interface User {
  id: string | null,
  password: string | null,
  name?: string | null,
  email?: string | null,
}

interface InitialState {
  id: string | null,
  authenticate: boolean,
  loading: boolean
}

const initialState: InitialState = {
  id: '',
  authenticate: false,
  loading: false
}

//로그인
export const loginAction = createAsyncThunk('login', (user: User) => {
  return axios.post('/auth/login', {
    id: user.id,
    password: user.password,
  }).then((res) =>{
    console.log("res",res)
    // if(res.data.pass===false){
    //   useAppDispatch(loginActionSuccess())
    // }else{
    //   useAppDispatch(loginActionFail())
    // }
  })
    .catch(() => toast.error("로그인fail!!"))
})

//로그 아웃
export const loginOutAction = createAsyncThunk('logout', () => {
  return axios
    .post("/auth/logout")
    .then(() => {
      toast.success("로그아웃success!!");
    })
    .catch((error) => {
      toast.error("로그아웃fail!!");
    });
})


//회원가입
export const signupAction = createAsyncThunk('signup', (user: User) => {
  return axios.post('/auth/register', {
    id: user.id,
    password: user.password,
    name: user.name,
    email: user.email,
  }).then((response) => {
    console.log(response)
    toast.success("회원가입success!!")
  })
  .catch(() => toast.error("회원가입fail!!"))
})

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginActionSuccess: state => state,
    loginActionFail: state => {
      state.authenticate = false
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.pending, state => {
      state.loading = true
    })
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.authenticate = true
      state.loading = false
    })
    builder.addCase(loginAction.rejected, (state, action) => {
      state.authenticate = false
      state.loading = false
    })
    builder.addCase(loginOutAction.pending, state => {
      state.loading = true
    })
    builder.addCase(loginOutAction.fulfilled, (state, action) => {
      state.authenticate = false
      state.loading = false
    })
    builder.addCase(loginOutAction.rejected, (state, action) => {
      state.authenticate = false
      state.loading = false
    })
    builder.addCase(signupAction.pending, state => {
      state.loading = true
    })
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.authenticate = true
      state.loading = false
    })
    builder.addCase(signupAction.rejected, (state, action) => {
      state.authenticate = false
      state.loading = false
    })
  }
})

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default loginSlice.reducer