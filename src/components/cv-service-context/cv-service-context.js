import React from "react";

const {
    Provider: CVServiceProvider, 
    Consumer: CVServiceConsumer
} = React.createContext()

export {
    CVServiceConsumer,
    CVServiceProvider
}