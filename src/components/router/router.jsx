import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { NotFound } from '../404/NotFound'


export const Router = props => {
    return (
        <BrowserRouter>
            {props.children}
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    <Route exact path='/magicbus' component={lazy(() => import('../../modules/magicbus/Magicbus'))} />
                    <Route exact path='/stargate' component={lazy(() => import('../../modules/stargate/Stargate'))} />
                    <Route exact path='/zombieland' component={lazy(() => import('../../modules/zombieland/Zombieland'))} />
                    <Route exact path='/home' component={lazy(() => import('../../modules/home/Home'))} />
                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}