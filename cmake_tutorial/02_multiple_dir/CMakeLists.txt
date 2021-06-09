# minimum version
cmake_minimum_required(VERSION 2.0.0)

# declare project name
project (multiple_dir)

# define includes directory
include_directories(inc)

# automagically ad all source files
file(GLOB SOURCES "src/*.cpp")

# add files for te projects
add_executable(the_class ${SOURCES})

