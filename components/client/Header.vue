<template>
     <header>
        <div class="header">
            <div class="header-icon">
                <img src="~/assets/images/logo.png" alt="">
            </div>
            <div style="width:18px"></div>
            <div class="header-search">
                <form action="">
                    <div class="button-search height-100 background-no">
                        <button class="height-100 background-no">
                            <i class="fa fa-search pl-14 text-color" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="search-input height-100 background-no">
                        <input placeholder="Search free high-resolution photos"
                            class="pl-14 pr-14 height-100 text-color no-border-focus"
                            style="background:none;border:none;" type="text">
                    </div>
                    <div class="search-by-img height-100 background-no">
                        <button class="height-100 background-no">
                            <i class="fa fa-camera pr-14 text-color" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="header-category">
                <div class="">
                    <a href="" class="text-color">Explore</a>
                </div>
                <div class="">
                    <a href="" class="text-color">Advertise</a>
                </div>
                <div class="">
                    <a href="" class="text-color">Blog</a>
                </div>
            </div>
            <div class="line-vertical"></div>
            <div class="header-auth">
                <div class="auth">
                    <a href="" class="text-color">Log in</a>
                </div>
                <div class="auth">
                    /
                </div>
                <div class="auth">
                    <a href="" class="text-color">Sign up</a>
                </div>
            </div>
            <div class="header-submit">
                <button>
                    Submit a photo
                </button>
            </div>
            <div style="width:12px"></div>
            <div class="header-burger">
                <button>
                    <i class="fa fa-bars" style="font-size:x-large;" aria-hidden="true"></i>
                </button>

            </div>
        </div>
        <div class="category">
            <div class="editorial">
                <a href="" class="text-color">
                    Editorial
                </a>
            </div>
            <div class="editorial">
                <div class="line-vertical"></div>
            </div>
            <div class="sc_menu" style="vertical-align: middle;">
                <ul class="sc_menu">
                    <li runat="server" id="branch"><a href="">Animal</a></li>
                    <li runat="server" id="etype"><a href="">Teen</a></li>
                    <li runat="server" id="employee"><a href="">School</a></li>
                    <li runat="server" id="category"><a href="">Interios</a></li>
                    <li runat="server" id="subcategory"><a href="">Fashion</a></li>
                    <li runat="server" id="menu"><a href="">Wallpapers</a></li>
                    <li runat="server" id="units"><a href="">Nature</a></li>
                    <li runat="server" id="tables"><a href="">Travel</a></li>
                    <li runat="server" id="taxes"><a href="">People</a></li>
                    <li runat="server" id="logout"><a href="">Film</a></li>
                    <li runat="server" id="logout"><a href="">Game</a></li>
                    <li runat="server" id="logout"><a href="">Motor</a></li>
                    <li runat="server" id="logout"><a href="">Car</a></li>
                    <li runat="server" id="logout"><a href="">Street Photography</a></li>
                    <li runat="server" id="logout"><a href="">Style</a></li>
                    <li runat="server" id="logout"><a href="">Food & Drink</a></li>
                    <li runat="server" id="logout"><a href="">Art & Culture</a></li>
                    <li runat="server" id="logout"><a href="">History</a></li>
                    <li runat="server" id="logout"><a href="">Architecture</a></li>
                    <li runat="server" id="logout"><a href="">Business & Work</a></li>
                    <li runat="server" id="logout"><a href="">Current Events</a></li>
                    <li runat="server" id="logout"><a href="">Texture & Patterns</a></li>
                    <li runat="server" id="logout"><a href="">Experimental</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
     
    }
  },
  computed: {
   
  },
  mounted() {
   
  },
  methods: {
   
  },
}
</script>
