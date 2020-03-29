<template>
	
<div class="wrapper" style="background-image: url('images/pic2.jpg');" >
			<div class="inner">
				<form action="" class="signup">
					<h3 class="login100-form-title p-b-37">Sign Up Form</h3>
					<div class="form-group" id="register-form">
						<div class="form-wrapper">
							<label for="">First Name</label>
							<input type="text" class="form-control" name="name" id="firstname" required>
						</div>
						<div class="form-wrapper">
							<label for="">Middle Name</label>
							<input type="text" class="form-control" name="name" id="middlename" required>
						</div>
						<div class="form-wrapper">
							<label for="">Last Name</label>
							<input type="text" class="form-control" name="name" id="lastname" required>
						</div>
					</div>
					<div class="form-wrapper">
						<label for="">Address</label>
						<input type="text" class="form-control" name="email" id="Address" required>
					</div>
					<div class="form-wrapper">
						<label for="">Email</label>
						<input type="text" class="form-control" name="email" id="email" required>
					</div>
					<div class="form-wrapper">
						<label for="">Username</label>
						<input type="text" class="form-control" name="email" id="Username" required>
					</div>
					<div class="form-wrapper">
						<label for="">Password</label>
						<input type="password" class="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name="pass" id="pass">
					</div>
					<div class="form-wrapper">
						<label for="">Confirm Password</label>
						<input type="password" class="form-control" name="re_pass" id="re_pass" required>
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox" required> I accept the Terms of Use & Privacy Policy.
							<span class="checkmark"></span>
						</label>
					</div>
					<button><a href="/LogIn">Register Now</a></button>
				</form>
			</div>
		</div>

</template>