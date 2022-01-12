cmake_minimum_required(VERSION 3.1.0)
project (hello)

# Set prefix install
# Create a list by replacing colon with semicolon
string(REPLACE ":" ";" CMAKE_PREFIX_PATH "$ENV{CMAKE_PREFIX_PATH}")
# Append to the newly created list
list(APPEND CMAKE_PREFIX_PATH "<YOUR_ADDITIONAL_SEARCH_PATH>")

message("CIP=${CMAKE_INSTALL_PREFIX}")

add_executable(hello main.cpp)

# Set the install path
install(TARGETS hello DESTINATION ${CMAKE_INSTALL_PREFIX})
