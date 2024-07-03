<script setup>
import {ref} from 'vue'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from 'vue-router'
const router = useRouter();

const email = ref("");
const password = ref("");

const register = async () => { // Make register function async
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("Registered successfully");
        router.push('/home');
        console.log('User registered:', userCredential);
    } catch (error) {
        console.error(error.code, error.message);
        alert(`Registration failed: ${error.message}`);
    }
};

const signInWithGoogle = () => {

}
</script>

<template>
    <div class="flex flex-col items-center w-8/12 mx-auto p-8 bg-gray-200 mt-20 rounded-xl">
        <h1 class="text-center">Create an account</h1>
        <input type="text" v-model="email" placeholder="Email" class="h-10 my-4 p-2 rounded-md w-5/6">
        <input type="password" v-model="password" placeholder="Password" class="h-10 mb-4 p-2 rounded-md w-5/6">
        <button @click="register" class="bg-blue-200 w-3/6 p-2 rounded-xl m-2">Register</button>
        <button @click="signInWithGoogle" class="bg-blue-200 w-3/6 p-2 rounded-xl m-2">Sign in With Google</button>
    </div>
    

    

</template>