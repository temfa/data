window.addEventListener("DOMContentLoaded", () => {
  const profileDetails = document.getElementById("profile-details");
  const notificationMenu = document.getElementById("notification-menu");
  const messageMenu = document.getElementById("message-menu");
  profileDetails.innerHTML += `<ul>
                  <li class="dropdown profile_details_drop">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true" aria-expanded="false">
                      <div class="profile_img">
                        <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                        <div class="user-active">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                      <li class="user-info">
                        <h5 class="user-name">John Doe</h5>
                        <!-- <span class="status ml-2">Available</span> -->
                      </li>
                      <li>
                        <a href="#"><i class="lnr lnr-user"></i>My Profile</a>
                      </li>
                      <!-- <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li> -->
                      <li>
                        <a href="#"><i class="lnr lnr-cog"></i>Setting</a>
                      </li>
                      <!-- <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li> -->
                      <li class="logout">
                        <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a>
                      </li>
                    </ul>
                  </li>
                </ul>`;

  notificationMenu.innerHTML += ` <li>
                        <div class="notification_header">
                          <h3>You have 3 new notifications</h3>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>Johnson bought bread</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                      </li>
                      <li class="odd">
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar2.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>New customer registered</p>
                            <span>1 hour ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar3.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>2 hours ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="notification_bottom">
                          <a href="#all" class="bg-primary">See all notifications</a>
                        </div>
                      </li>`;

  messageMenu.innerHTML += `<li>
                        <div class="notification_header">
                          <h3>You have 4 new messages</h3>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>Johnson bought template</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                      </li>
                      <li class="odd">
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar2.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>New customer registered</p>
                            <span>1 hour ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar3.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>2 hours ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="grid">
                          <div class="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                          <div class="notification_desc">
                            <p>Johnson purchased template</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="notification_bottom">
                          <a href="#all" class="bg-primary">See all messages</a>
                        </div>
                      </li>`;
})(function () {
  "use strict";

  // Toggle Left Menu
  jQuery(".menu-list > a").click(function () {
    var parent = jQuery(this).parent();
    var sub = parent.find("> ul");

    if (!jQuery("body").hasClass("sidebar-menu-collapsed")) {
      if (sub.is(":visible")) {
        sub.slideUp(200, function () {
          parent.removeClass("nav-active");
          jQuery(".main-content").css({
            height: "",
          });
          mainContentHeightAdjust();
        });
      } else {
        visibleSubMenuClose();
        parent.addClass("nav-active");
        sub.slideDown(200, function () {
          mainContentHeightAdjust();
        });
      }
    }
    return false;
  });

  function visibleSubMenuClose() {
    jQuery(".menu-list").each(function () {
      var t = jQuery(this);
      if (t.hasClass("nav-active")) {
        t.find("> ul").slideUp(200, function () {
          t.removeClass("nav-active");
        });
      }
    });
  }

  function mainContentHeightAdjust() {
    // Adjust main content height
    var docHeight = jQuery(document).height();
    if (docHeight > jQuery(".main-content").height()) jQuery(".main-content").height(docHeight);
  }

  //  class add mouse hover
  jQuery(".custom-nav > li").hover(
    function () {
      jQuery(this).addClass("nav-hover");
    },
    function () {
      jQuery(this).removeClass("nav-hover");
    }
  );

  //  class add mouse hover
  jQuery(".mail-nav > li").hover(
    function () {
      jQuery(this).addClass("nav-hover");
    },
    function () {
      jQuery(this).removeClass("nav-hover");
    }
  );

  // Menu Toggle
  jQuery(".toggle-btn").click(function () {
    $(".sidebar-menu").getNiceScroll().hide();

    if ($("body").hasClass("sidebar-menu-collapsed")) {
      $(".sidebar-menu").getNiceScroll().hide();
    }
    var body = jQuery("body");
    var bodyposition = body.css("position");

    if (bodyposition != "relative") {
      if (!body.hasClass("sidebar-menu-collapsed")) {
        body.addClass("sidebar-menu-collapsed");
        jQuery(".custom-nav ul").attr("style", "");

        jQuery(this).addClass("menu-collapsed");
      } else {
        body.removeClass("sidebar-menu-collapsed chat-view");
        jQuery(".custom-nav li.active ul").css({
          display: "block",
        });

        jQuery(this).removeClass("menu-collapsed");
      }
    } else {
      if (body.hasClass("sidebar-menu-show")) body.removeClass("sidebar-menu-show");
      else body.addClass("sidebar-menu-show");

      mainContentHeightAdjust();
    }
  });

  searchform_reposition();

  jQuery(window).resize(function () {
    if (jQuery("body").css("position") == "relative") {
      jQuery("body").removeClass("sidebar-menu-collapsed");
    } else {
      jQuery("body").css({
        left: "",
        marginRight: "",
      });
    }

    searchform_reposition();
  });

  function searchform_reposition() {
    if (jQuery(".searchform").css("position") == "relative") {
      jQuery(".searchform").insertBefore(".sidebar-menu-inner .logged-user");
    } else {
      jQuery(".searchform").insertBefore(".menu-right");
    }
  }
})(jQuery);

// Dropdowns Script
// $(document).ready(function () {
//    $(document).on('click', function (ev) {
//       ev.stopImmediatePropagation();
//       $(".dropdown-toggle").dropdown("active");
//    });
// });

/************** Search ****************/
$(function () {
  var button = $("#loginButton");
  var box = $("#loginBox");
  var form = $("#loginForm");
  button.removeAttr("href");
  button.mouseup(function (login) {
    box.toggle();
    button.toggleClass("active");
  });
  form.mouseup(function () {
    return false;
  });
  $(this).mouseup(function (login) {
    if (!($(login.target).parent("#loginButton").length > 0)) {
      button.removeClass("active");
      box.hide();
    }
  });
});
