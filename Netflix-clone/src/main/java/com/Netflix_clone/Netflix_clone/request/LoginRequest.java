package com.Netflix_clone.Netflix_clone.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import lombok.Data;

@Data
public class LoginRequest {

    private String email;

    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
