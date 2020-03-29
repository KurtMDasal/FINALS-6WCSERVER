<template>
	<div class="container-login100">
    <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
        <form class="login100-form validate-form">
            <span class="login100-form-title p-b-37">
                LOG IN
            </span>

            <div class="wrap-input100 validate-input m-b-20" data-validate="Enter Username or Email">
                <input class="input100" type="text" name="username" placeholder="Username or Email" required>
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
                <input class="input100" type="password" name="pass" placeholder="Password" required>
                <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                <a href="/">Log In</a>
                </button>
            </div>

            <div class="text-center p-t-57 p-b-20">
                <span class="txt1">
                    Or login with
                </span>
            </div>

            <div class="flex-c p-b-112" style="display:block;">
                <a href="#" class="login100-social-item" style="float:left; margin-left:150px;" >
                <img src="../assets/icon-fb.png" alt="Facebook">
                </a>
                <a href="#" class="login100-social-item" style="float:right; margin-right:150px; margin-left:0px;">
                    <img src="../assets/icon-google.png" alt="GOOGLE">
                </a>
            </div>

            <div class="text-center">
                <a href="/SignUp" class="txt2 hov1" style="margin-top:100px; padding:100px;">
                    Click here to Sign Up
                </a>
            </div>
        </form>

       
    </div>
    
</div>
</template>