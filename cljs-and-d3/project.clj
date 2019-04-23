(defproject cljs-and-d3 "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [net.drib/mrhyde "0.5.5"]
                 [org.clojars.davidykay/strokes "0.5.2-SNAPSHOT"]
                 ;[com.davidykay/strokes "0.5.2-SNAPSHOT"]
                 ;;[strokes "0.5.2-SNAPSHOT"]
                 ]
  ;;:npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths [;;"src/clj"
                 "src/cljs"
                 ]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "public/out/cljs-d3.js"
                                   :pretty-print true
                                   :optimizations :whitespace}}]})
