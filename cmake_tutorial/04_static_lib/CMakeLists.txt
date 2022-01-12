# Set version and project
cmake_minimum_required(VERSION 3.1.0)
project (the_calss_static)

# Set Release build
set(CMAKE_BUILD_TYPE Release)

# Set prefix install
# Create a list by replacing colon with semicolon
string(REPLACE ":" ";" CMAKE_PREFIX_PATH "$ENV{CMAKE_PREFIX_PATH}")
# Append to the newly created list
list(APPEND CMAKE_PREFIX_PATH "/usr/local")

# Set sources
file(GLOB INST_HEADERS "inc/*.h")
file(GLOB SOURCES "src/*.cpp")

# Set includes
include_directories(inc)

# Set sources for static library
add_library(the_class_static STATIC ${SOURCES})

# Set headers for the library
set_target_properties(the_class_static PROPERTIES PUBLIC_HEADER ${INST_HEADERS})

# Set the install path
install(TARGETS the_class_static
  LIBRARY       DESTINATION "lib"
  PUBLIC_HEADER DESTINATION "include"
  )
