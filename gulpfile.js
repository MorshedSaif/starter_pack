const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function styles() {
    return gulp
        .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
}

function fontStyles() {
    return gulp
        .src("node_modules/font-awesome/css/font-awesome.min.css")
        .pipe(gulp.dest("src/css"));
}

function scripts() {
    return gulp
        .src([
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/popper.js/dist/popper.js",
        ])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp
        .src("node_modules/font-awesome/fonts/*")
        .pipe(gulp.dest("src/fonts"));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
        },
    });
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/app.js").on("change", browserSync.reload);
    gulp.watch(
        ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
        styles
    );
    gulp.watch(
        [
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/popper.js/dist/popper.js",
        ],
        scripts
    );
    gulp.watch(["node_modules/font-awesome/fonts/*"], fonts).on(
        "change",
        browserSync.reload
    );
    gulp.watch(
        ["node_modules/font-awesome/css/font-awesome.min.css"],
        fontStyles
    ).on("change", browserSync.reload);
}

gulp.task("default", gulp.parallel(watch, styles, scripts, fonts, fontStyles));
