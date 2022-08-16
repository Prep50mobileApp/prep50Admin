<template>
  <div class="app-sidebar sidebar-shadow">
          <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  class="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="app-header__mobile-menu">
            <div>
              <button
                type="button"
                class="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div class="app-header__menu">
            <span>
              <button
                type="button"
                class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span class="btn-icon-wrapper">
                  <i class="fa fa-ellipsis-v fa-w-6"></i>
                </span>
              </button>
            </span>
          </div>
           <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
              <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Dashboard</li>
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-plugin"></i>Home
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left"
                    ></i>
                  </a>
                  <ul>
                    <li>
                      <router-link :to="{ name: 'register-list' }">
                        <i class="metismenu-icon"></i>Registered
                      
                    </router-link>
                    </li>
                    <li>
                       <router-link :to="{ name: 'subscribers' }">
                        <i class="metismenu-icon"></i>Subscribers
                      
                    </router-link>
                     
                    </li>
                    <li>
                      <router-link :to="{ name: 'unsubscribers' }">
                          <i class="metismenu-icon"></i>Unsubscribers
                        <i
                          class="metismenu-state-icon pe-7s-angle-down caret-left"
                        ></i>
                      
                    </router-link>
                     
                    </li>
                  </ul>
                </li>
                <li class="app-sidebar__heading">Blog</li>
                
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-car"></i> Manage Blog
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left"
                    ></i>
                  </a>
                  <ul>
                    
                    <li>
                      <router-link :to="{ name: 'manage-blog' }">
                        <i class="metismenu-icon"></i>Manage Post
                      
                    </router-link>
                      
                    </li>
                    <li>
                      <router-link :to="{ name: 'create-blog' }">
                        <i class="metismenu-icon"></i>Create Post
                      
                    </router-link>
                      
                    </li>
                    <li>
                      <a href="#">
                        <i class="metismenu-icon"></i>Draft
                      </a>
                    </li>
                    
                  </ul>
                </li>
                
                <li class="app-sidebar__heading">Podcast</li>
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-ball"></i>Home Podcast
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left"
                    ></i>
                  </a>
                      <ul>
                    
                    <li>
                      <router-link :to="{ name: 'manage-podcast' }">
                        <i class="metismenu-icon"></i>Manage Podcast
                      
                    </router-link>
                     
                    </li>
                    <li>
                      <router-link :to="{ name: 'create-podcast' }">
                        <i class="metismenu-icon"></i>Create Podcast
                      
                    </router-link>
                    </li>
                    
                  </ul>
                </li>
                
                <li class="app-sidebar__heading">referrals</li>
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-light"></i>Manage referral
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left"
                    ></i>
                  </a>
                  <ul>
                    <li>
                      <router-link :to="{ name: 'manage-referral' }">
                        <i class="metismenu-icon"></i>Referrals
                      
                    </router-link>
                      
                    </li>
                  </ul>
                </li>
                <li class="app-sidebar__heading">Mock</li>
                <li>
                  <a href="#">
                    <i class="metismenu-icon pe-7s-graph2"></i>Home Mock
                    <i
                      class="metismenu-state-icon pe-7s-angle-down caret-left"
                    ></i>
                  </a>
                    <ul>
                    <li>
                      <a href="#">
                        <i class="metismenu-icon"></i>Manage Mock
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="metismenu-icon"></i>Create Mock
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>