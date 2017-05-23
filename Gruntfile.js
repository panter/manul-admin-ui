module.exports = function config(grunt) {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js', '**/*.jsx'],
            dest: 'dist/',
            ext: '.js',
          },
        ],
      },
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        tasks: ['babel'],
        options: {
          spawn: false,
        },
      },
    },
    eslint: {
      src: ['src/**/*js'],
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};

