<template>
    <div>
        <el-row type="flex" justify="center"> 
            <h1>
                register
            </h1>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="6">
                <div v-if="regError">
                    <el-alert
                        v-for="(v, k, i) in regError" :key="i"
                        class="mb-1 reg-error shake"
                        :title="'this '+k +' '+v"
                        type="error"
                        :show-icon="false"
                        :closable="false">
                    </el-alert>
                </div>
                <el-form  class="demo-form-inline">
                    <el-form-item label="name" >
                        <el-input  placeholder="Name" v-model.trim="$v.name.$model" :class="{ 'form-group--error': $v.name.$error }">
                        </el-input>
                    </el-form-item>
                    <div :class="{ 'has-error': $v.name.$error }">
                        <el-alert
                            class="error"
                            v-if="!$v.name.required"
                            title="Field is required"
                            type="error shake"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                        <el-alert
                            class="error shake"
                            v-if="!$v.name.minLength"
                            :title="`Name must have at least ${$v.name.$params.minLength.min} letters `"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                    </div>
                    <el-form-item label="Email">
                        <el-input  placeholder="Email" v-model.trim="$v.email.$model"></el-input>
                    </el-form-item>
                    <div :class="{ 'has-error': $v.email.$error }">
                        <el-alert
                            class="error shake"
                            v-if="!$v.email.required"
                            title="Field is required"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                        <el-alert
                            class="error shake"
                            v-if="!$v.email.email"
                            title="нужен норм email"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                    </div>
                    <el-form-item label="Password">
                        <el-input  placeholder="Password" v-model.trim="$v.password.$model" type="password"></el-input>
                    </el-form-item>
                    <div :class="{ 'has-error': $v.password.$error }">
                        <el-alert
                            class="error shake"
                            v-if="!$v.password.required"
                            title="Field is required"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                        <el-alert
                            class="error shake"
                            v-if="!$v.password.minLength"
                            :title="`Name must have at least ${$v.password.$params.minLength.min} letters `"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                    </div>
                    <el-form-item label="Repeat assword">
                        <el-input  placeholder="Repeat password" v-model.trim="$v.repeatPassword.$model" type="password"></el-input>
                    </el-form-item>
                    <div :class="{ 'has-error': $v.repeatPassword.$error }">
                        <el-alert
                            class="error shake"
                            v-if="!$v.password.sameAsPassword"
                            title="should be same as password"
                            type="error"
                            :show-icon="false"
                            :closable="false">
                        </el-alert>
                    </div>
                    <el-form-item>
                        <el-button :disabled="$v.validationGroup.$invalid" :loading="isSubmit" @click="sendForm" type="primary">send</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        {{$v.validationGroup.repeatPassword}}
    </div>
</template>
<script>
import { required, minLength, between,email, sameAs } from 'vuelidate/lib/validators'
import{ mapState } from 'vuex'
export default {
    name:'MRegister',
    data(){
        return {
            name:'',
            email:'',
            password:'',
            repeatPassword: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            email,
            required,
            minLength: minLength(4)
        },
        password: {
            required,
            minLength: minLength(8)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        },
        validationGroup:['name','email','password','repeatPassword']
    },
    computed:{
        ...mapState({
            isSubmit: state => state.auth.isSubmit,
            regError: state => state.auth.validationErrors
            
        })
    },
    methods:{
    sendForm(){
        const data  = {
            email: this.email,
            username: this.name,
            password: this.password
        }
        this.$store.dispatch('registerUser', data)
        .then(user=>{
            this.$router.push({name:'home'})
        })
        }
    }
}
</script>
<style>
.mb-1{
    margin-bottom: 15px !important;
}
    .form-group--error{
        border-radius: 1px solid red;
    }
    .error {
        display: none !important;
    }
    .shake{
        animation-name: shakeError;
        animation-fill-mode: forwards;
        animation-duration: .6s;
        animation-timing-function: ease-in-out;
    }
    .has-error .error {
        display: block !important;

    }
    @keyframes shakeError {
        0% {
            transform: translateX(0); }
        15% {
            transform: translateX(0.375rem); }
        30% {
            transform: translateX(-0.375rem); }
        45% {
            transform: translateX(0.375rem); }
        60% {
            transform: translateX(-0.375rem); }
        75% {
            transform: translateX(0.375rem); }
        90% {
            transform: translateX(-0.375rem); }
        100% {
            transform: translateX(0); }
    }
</style>