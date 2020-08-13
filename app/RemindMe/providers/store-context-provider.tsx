import { Store } from "../models/store";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "./user-provider";
import { AssetsProvider } from "./assets-provider";

const StoreContext = React.createContext<Store | null>(null);
let store: Store | null = null;

/**
 * @description provides the store context all over the application
 * @param props 
 */
export const StoreContextProvider = (props: any) => {
    store = createStore();

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
};

/**
 * @description provides access to the store
 * */
export const useStore = (): Store => {
    if(!store) {
        throw new Error("Store not ready yet!");
    }

    return store;
}

/**
 * @description creates a new store
 */
const createStore = (): Store => {
    return new Store(
        new ThemeProvider(),
        new UserProvider(),
        new AssetsProvider()
    );
};