<script>
export default {
    name: 'AppMain',
    data() {
        return {
        }
    }
}
</script>
<template>
    <div>

        <h1 class="text-white titol_contact text-center">CONTACT US</h1>


        <div class="container">
            <h3 class="text-white mb-5">Fill in your details and we'll contact you as soon as possible!</h3>
            <form action="">
                <div class="mb-3">
                    <label for="name" class="form-label text-uppercase text-white">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Elon Musk"
                        aria-describedby="nameHelper">
                    <small id="nameHelper" class="fs-6 text-white">Type your name</small>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label  text-uppercase text-white">phone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
                        aria-describedby="phoneHelper">
                    <small id="phoneHelper" class="fs-6 text-white">Type your phone</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-uppercase text-white">email</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="elon@musk.com"
                        aria-describedby="emailHelper">
                    <small id="emailHelper" class="fs-6 text-white">Type your email</small>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label text-white">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="3"
                        placeholder="Your message here..."></textarea>
                </div>


                <button type="submit" class="btn btn-primary mb-5">SEND</button>

            </form>
        </div>

    </div>
</template>