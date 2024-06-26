<template>
    <header>
        <div class="header_section">
            <div class="container-fluid">
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <<router-link to="/">Home></router-link>
                        <<router-link to="/products">Products></router-link>
                        <<router-link to="/about">About></router-link>
                        <<router-link to="/client">Client></router-link>
                        <<router-link to="/contact">Contact></router-link>
                    </div>
                    <span class="toggle_icon" onclick="openNav()"><img src="../assets/images/toggle-icon.png"></span>
                    <a class="logo" href="index.html"><img src="../assets/images/logo.png"></a>
                    <form class="form-inline ">
                        <div class="login_text">
                            <ul>
                            <li><a href="#"><img src="../assets/images/user-icon.png"></a></li>
                            <li><a href="#"><img src="../assets/images/bag-icon.png"></a></li>
                            <li><a href="#"><img src="../assets/images/search-icon.png"></a></li>
                            </ul>
                        </div>
                    </form>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>