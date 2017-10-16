"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var posthtml = require("gulp-posthtml");
var includeHtml = require("posthtml-include");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var run = require("run-sequence");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
    return gulp.src("img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
          imagemin.optipng({optimizationLevel: 3}),
          imagemin.jpegtran({progressive: true}),
          imagemin.svgo()
        ]))
        .pipe(gulp.dest("img/optimized"));
});

gulp.task("webp", function () {
    return gulp.src("img/**/*.{jpg,png}")
        .pipe(webp({quality: 85}))
        .pipe(gulp.dest("img"));
});

gulp.task("sprite", function() {
    return gulp.src("img/icon-*.svg")
        .pipe(svgstore({
          inlineSvg: true
        }))
        .pipe(rename("sprite-auto.svg"))
        .pipe(gulp.dest("img"));
});

gulp.task("html", function() {
    return gulp.src("*.html")
        .pipe(posthtml([
          includeHtml()
        ]))
        .pipe(gulp.dest("."))
});

gulp.task("clean", function() {
    return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", function(done) {
    run("style", "sprite", "html", done);
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
