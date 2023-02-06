package com.web.dim_on2.config;

import com.web.dim_on2.security.jwt.AuthEntryPoint;
import com.web.dim_on2.security.jwt.JwtFilter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Setter(onMethod = @__(@Autowired))
    private AuthEntryPoint authEntryPoint;

    @Bean
    public JwtFilter jwtFilter() {
        return new JwtFilter();
    }
    private final String[] PUBLIC_URLS = new String[]{"/public/**", "/api/users/current"};
    private final String[] NON_AUTH_ONLY_URLS = new String[]{"/api/auth/**"};
    private final String[] AUTH_ONLY_URLS = new String[]{"/api/**"};

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeHttpRequests( request -> {
            request.requestMatchers(PUBLIC_URLS).permitAll()
                    .requestMatchers(AUTH_ONLY_URLS).authenticated()
                    .anyRequest().permitAll();
                } );

        http.addFilterBefore(jwtFilter(), UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling().authenticationEntryPoint(authEntryPoint);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
