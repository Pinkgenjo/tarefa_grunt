module.exports = function(grunt) {
  // Configuração das tarefas
  grunt.initConfig({
    // Compilação do LESS
    less: {
      development: {
        options: {
          sourceMap: true // Gera um mapa de origem para facilitar o debug
        },
        files: {
          "dist/style.css": "src/style.less"
        }
      }
    },

    // Compressão de código JavaScript
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          'dist/output.min.js': ['src/script.js']
        }
      }
    }
  });

  // Carrega os plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefa padrão
  grunt.registerTask('default', ['less', 'uglify']);
};