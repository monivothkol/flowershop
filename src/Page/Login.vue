<script setup>
import {ref} from 'vue'
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {useRouter} from 'vue-router'

const router = useRouter();

const email = ref("");
const password = ref("");

const login = async () => { // Make register function async
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log("Signed In!");
        router.push('/home');
        console.log('User registered:', userCredential);
    } catch (error) {
        console.error(error.code, error.message);
        alert(`Registration failed: ${error.message}`);
    }
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider)
    .then((result) => {
        console.log(result.user);
        router.push("/home");
    })
    .cath((error) => {

    })
}
</script>

<template>
    <div class="flex flex-col items-center w-8/12 mx-auto p-8 bg-gray-200 mt-20 rounded-xl">
        <h1 class="text-center">Login to your account</h1>
        <input type="text" v-model="email" placeholder="Email" class="h-10 my-4 p-2 rounded-md w-5/6">
        <input type="password" v-model="password" placeholder="Password" class="h-10 mb-4 p-2 rounded-md w-5/6">
        <button @click="login" class="bg-blue-200 w-3/6 p-2 rounded-xl m-2">Login</button>
        <button @click="signInWithGoogle" class="bg-blue-200 w-3/6 p-2 rounded-xl m-2">Sign in With Google</button>
    </div>
    

    

</template>