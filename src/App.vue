<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark border-bottom fixed-top box-shadow"> <!-- p-3 px-md-4 mb-3 -->
        <div class="container">
          <a class="navbar-brand brand" href="/">LOGO</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" id="produtos" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-store"></i> Produtos</a>
                <div class="dropdown-menu" aria-labelledby="produtos">
                  <router-link class="dropdown-item" to="cadastrar">cadastrar</router-link>
                </div>
              </li>
            </ul>
            <div class="my-2 my-lg-0">
              <ul class="navbar-nav mr-auto text-center">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <i class="fas fa-shopping-cart"></i> Carrinho
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <i class="fas fa-sign-out-alt"></i>
                    Sair
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view class="" />
    </div>
  </div>
</template>

<style lang="scss">
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Open Sans";
}

#app {
  margin-top: 70px;
}

.brand {
	font-family: 'Berkshire Swash' !important;
  font-size: 17px !important;
}
</style>
