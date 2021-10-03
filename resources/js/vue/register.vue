<template>
    <div class="container">
        <div class="card-body">
            <h2 class="text-center pb-2">Register</h2>
            <form action="" @submit.prevent="handleLogin">
                <div class="form-group row">
                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                    <div class="col-md-6">
                        <input id="name" type="text" class="form-control" name="name" v-model="formData.name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email" v-model="formData.email">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" v-model="formData.password">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Password Confirmation</label>

                    <div class="col-md-6">
                        <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" v-model="formData.password_confirmation">
                    </div>
                </div>


                <div class="form-group row mb-0">
                    <div class="col-md-8 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        handleLogin(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/register', this.formData).then(response => {
                    if(response.status === 201){
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                        localStorage.setItem( 'token', response.data.token);
                        this.$store.commit("setAuthentication", true);
                        this.$router.replace({ name: "todo" });
                        console.log(response);
                    }
                })
                    .catch(error => {
                        console.log(error)
                    })
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
