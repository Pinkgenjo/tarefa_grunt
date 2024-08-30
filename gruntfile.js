module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
      // Compilação do LESS
      less: {
        development: {
          files: {
            "dest/style.css": "src/style.less"
          }
        }
      },
  
      // Compressão de código JavaScript
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dest/output.min.js': ['src/input.js']
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