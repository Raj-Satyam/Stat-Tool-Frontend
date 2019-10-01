##install.packages("dplyr")
##install.packages("plumber")
library(plumber)
library(dplyr)

##functions.R##
##-----------##

#* @get /createmodel
#* @serializer unboxedJSON

createDataModel <- function() {
  library(dplyr)
  data <- read.csv(file="/home/musigma/Desktop/stattool_v1/frontend/codes_repository/sample_data.csv",header= TRUE, sep=",")
  output_data <- data %>% mutate(colc=cola+colb) %>% mutate(cold=cola-colb)
  
  write.csv(output_data,"/home/musigma/Desktop/stattool_v1/frontend/codes_repository/output_data.csv")
  list('response'= output_data)
}