## Lab 43-load-testing

This lab uses *artillery* and *faker* to load test a back-end application.

Using npm, install *faker* locally (**npm i -D faker**) and *artillery* globally - per the docs (**npm install -g artillery**).

To use *artillery*:
- Set up a configs file using json.  This test has two files *simple-load-test.json* and *complex-load-test.json*.
- Run the load test with the command
```
artillery run <config file>
```

You can also generate a report file with the command
```
artillery run <config file> -o ./<result file.json>
```

Finally, use the following command to generate an .html file with graphic representation of the results.
```
artillery report <path to result file.json.
```


Write o
e to two paragraphs on the behavior of the load testing and the artillery report. If you were presenting this lab to coworkers, how would you present it?
