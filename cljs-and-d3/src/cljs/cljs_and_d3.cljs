(ns cljs.cljs-and-d3
  (:require [strokes :refer [d3]]))

(println "FOO")

(strokes/bootstrap)

; lovely small example, albeit not data driven.
(def width 960)
(def height 500)

(println "WIDTH: " width)

(def svg (-> d3 (.select "body") (.append "svg")
      (.attr {:width width :height height})))

(-> svg (.append "circle")
      (.attr {:cx 350 :cy 200 :r 200 :class "left"}))

(-> svg (.append "circle")
      (.attr {:cx 550 :cy 200 :r 200 :class "right"}))

(-> svg (.append "circle")
(.attr {:cx 450 :cy 300 :r 200 :class "bottom"}))
