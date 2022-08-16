<template>
  <div class="app-container app-theme-white body-tabs-shadow">
    <div class="app-container">
      <div class="h-100 bg-plum-plate bg-animation">
        <div class="d-flex h-100 justify-content-center align-items-center">
          <div class="mx-auto app-login-box col-md-8">
            <div class="app-logo-inverse mx-auto mb-3"></div>
            <div class="modal-dialog w-100 mx-auto">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="h5 modal-title text-center">
                    <h4 class="mt-2">
                      <div>Welcome back,</div>
                      <span>Please sign in to your account below.</span>
                    </h4>
                  </div>
                  <form @submit.prevent="submit">
                    <div class="form-row">
                      <div class="col-md-12">
                       
                        <div class="position-relative form-group">
                          <input
                            name="username"
                            id="exampleusername"
                            placeholder="username here..."
                            type="text" v-model="form.username"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="position-relative form-group">
                          <input
                            name="password"
                            id="examplePassword"
                            placeholder="Password here..."
                            type="password" v-model="form.password"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="position-relative form-check">
                      <input
                        name="check"
                        id="exampleCheck"
                        type="checkbox"
                        class="form-check-input"
                      />
                      <label for="exampleCheck" class="form-check-label"
                        >Keep me logged in</label
                      >
                    </div>
                    
                  

                  <div class="divider"></div>
                  <h6 class="mb-0">
                    No account?
                    <a href="javascript:void(0);" class="text-primary"
                      >Sign up now</a
                    >
                  </h6>
                   <div class="modal-footer clearfix">
                  <div class="float-left">
                    <a href="javascript:void(0);" class="btn-lg btn btn-link"
                      >Recover Password</a
                    >
                  </div>
                  <div class="float-right">
                      <button class="btn btn-primary btn-lg" type="submit">
                        Login to Dashboard
                      </button>
                    </div>
                </div>
                
                  </form>
                </div>
               
              </div>
            </div>
            <div class="text-center text-white opacity-8 mt-3">
              Copyright © deacons digit 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import{mapActions} from 'vuex'
export default {
  // name:'LoginView',
  component: {},
  data() {
    return {
      form: {
        username: '',
        password:'',
      },
    };
  },
  methods: {
    ...mapActions({
      logIn: 'auth/logIn'

    }),
    
    submit() {
    // let response = await axios.post('https://prep50.herokuapp.comadmin',this.form);
    // console.log(response.data);
     this.logIn(this.form).then(()=>{
      this.$router.replace({
        name:'dashboard'
      })
     }).catch(()=>{
      console.log('Wrong details passed')
     })
    }
  }
};
</script>
