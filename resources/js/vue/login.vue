<template>
    <div class="container">
        <div class="card-body">
            <h2 class="text-center pb-2">Sign In</h2>
            <form action="" @submit.prevent="handleLogin">
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
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleLogin(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', this.formData).then(response => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                    localStorage.setItem( 'token', JSON.stringify(response.data.token) );
                    console.log(response);
                })
            });
        }
    }
}
</script>
