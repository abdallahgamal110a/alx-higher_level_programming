#!/usr/bin/python3
def print_list_integer(my_list=[]):
    for i in my_list:
        i.__index__
        print("{:d}".format(i))
