<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
        />
    </Stack.Navigator>
</NavigationContainer>