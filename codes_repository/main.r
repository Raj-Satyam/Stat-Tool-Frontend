##main.R##
##------##
library(plumber)

#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*") # Or whatever
  plumber::forward()
}

#* @get /myRoute
myRoute <- function() {
  r <- plumb("/home/musigma/Desktop/stattool_v1/frontend/codes_repository/sample_r_script.r")
  r$run(port=9000)
}

#r$run(port=9000)

myRoute()
