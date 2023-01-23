<?php
require('includes/db.php');
require('includes/function.php');
?>
<!doctype html>
<html lang="en-US">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="img/p.png" type="image/icon type">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link media="all" href="wp-content/cache/autoptimize/css/autoptimize_1c0ee47c32a33ea6f1f643fa80432913.css"
        rel="stylesheet" />
    <title>PRIYAL KENI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel='stylesheet' id='cvio-fonts-css'
        href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C700%2C700italic%2C900%2C900italic&amp;subset=latin%2Clatin-ext'
        type='text/css' media='all' />
    <link rel='stylesheet' id='google-fonts-1-css'
        href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;ver=5.5.3'
        type='text/css' media='all' />
    <script type='text/javascript' src='wp-includes/js/jquery/jquery4a5f.js' id='jquery-core-js'></script>
    
</head>
<body class="post-template-default single single-post postid-469 single-format-standard elementor-default">
    <div class="preloader">
        <div class="centrize full-width">
            <div class="vertical-center">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="cursor-follower">
            <div class="cursor-follower-inner"></div>
        </div>
        <?php include_once('includes/header.php');?>
        <?php
                     $post_id = $_GET['id'];
                     $postQuery = "SELECT * FROM posts WHERE id=$post_id";
                     $runPQ = mysqli_query($db,$postQuery);
                     $post=mysqli_fetch_assoc($runPQ);
        ?>
        <div class="wrapper">
            <div class="section started background-enabled section-title" id="section-post">
            <?php $imgQuery= "SELECT image FROM images WHERE post_id = {$post['id']}"; ?>
            <?php $img = mysqli_query($db,$imgQuery);?>
            <?php $image = mysqli_fetch_assoc($img);?>
                <div class="video-bg jarallax"> <img class="jarallax-img"
                        src="img/<?= $image['image'] ?>" alt="">
                    <div class="video-bg-mask" style="opacity: 0.4;background-color: #000000;"></div>
                    <div class="video-bg-texture" id="grained_container"></div>
                </div>
                <div class="centrize full-width">
                    <div class="vertical-center">
                    
                        <div class="started-content">
                            <h1 class="h-title" ><?=$post['title']?></h1>
                            
                        </div>
                    </div>
                </div> 
            </div>
            <div class="section blog">
                <div class="content">
                    <div id="post-469"
                        class="post-469 post type-post status-publish format-standard has-post-thumbnail hentry category-design category-mobile category-music tag-design tag-html tag-mobile tag-music tag-web tag-wordpress">
                        <div class="content-box">
                            <div class="single-post-text"style="text-align: justify; color:#fff">
                            <p><?=$post['content']?></p>
                            </div>
        
                            
                        </div>
                    </div>
                    
                    <!-- <div id="comments" class="post-comments">
                       
                        <div class="form-comment content-box">
                            <div id="respond" class="comment-respond">
                                <div id="reply-title" class="title comment-reply-title">
                                    <div class="title_inner">Write a comment <small><a rel="nofollow"
                                                id="cancel-comment-reply-link" href="index.html#respond"
                                                style="display:none;">Cancel Reply</a></small></div>
                                </div>
                                <form action="#" method="post"
                                    id="commentform" class="comment-form" novalidate>
                                    <div class="group-val ct-gr"><textarea placeholder="Comment" id="comment"
                                            name="comment" aria-required="true"></textarea></div>
                                    <div class="group-val"><input id="author" name="author" type="text"
                                            placeholder="Name" value="" aria-required='true' /></div>
                                    <div class="group-val"><input id="email" name="email" type="text"
                                            placeholder="Email" value="" aria-required='true' /></div>
                                    <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent"
                                            name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label
                                            for="wp-comment-cookies-consent">Save my name, email, and website in this
                                            browser for the next time I comment.</label></p>
                                    <div class="form-submit"><button type="submit" name="submit" id="submit"
                                            class="btn fill" data-text="Submit">Submit</button> <input type='hidden'
                                            name='comment_post_ID' value='469' id='comment_post_ID' /> <input
                                            type='hidden' name='comment_parent' id='comment_parent' value='0' /></div>
                                </form>
                            </div>
                        </div>
                    </div> -->
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <footer class="footer">
            
            <div class="soc-box">
                <div class="follow-label">Follow Me</div>
                <div class="soc"> <a  href="http://www.linkedin.com/in/priyalkeni "target="_blank"> <i class="fab fa-linkedin-in"></i> </a> <a 
                        href="https://www.facebook.com/priyal.keni/ "target="_blank"> <i class="fab fa-facebook-f"></i> </a> <a
                         href="https://instagram.com/priyalkeni?igshid=1430ttlb1qrtw "target="_blank"><i class="fab fa-instagram"></i>
                    </a></div>
            </div>
            <div class="clear"></div>
        </footer>
        <div class="lines">
            <div class="content">
                <div class="line-col"></div>
                <div class="line-col"></div>
                <div class="line-col"></div>
                <div class="line-col"></div>
                <div class="line-col"></div>
            </div>
        </div>
    </div>
    <script defer
        src="wp-content/cache/autoptimize/js/autoptimize_83e5ade96914b30e9d21d82dc5f277c4.js"></script>
</body>

</html>